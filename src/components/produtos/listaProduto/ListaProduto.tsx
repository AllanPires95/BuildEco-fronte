import React, { useState, useEffect, ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography, TextField } from '@material-ui/core';
import { Box } from '@mui/material';
import Fab from '@mui/material/Fab'
import { useNavigate } from 'react-router-dom'
import { busca } from '../../../services/Service';
import Produto from '../../../models/Produto';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add'
import './ListaProduto.css'


export function ListaProduto() {
    const [produtos, setPosts] = useState<Produto[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const userId = useSelector<TokenState, TokenState["id"]>(
        (state) => state.id
    );
    let navigate = useNavigate();

    useEffect(() => {
        if (token == "") {
            toast.warn('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate("/login")

        }
    }, [token])

    async function getPost() {
        await busca("/produto", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPost()

    }, [produtos.length])

    const handleAddToCart = () => { }
    

    const [pesquisa, setPesquisa] = useState("");

    let vazio: boolean = false;

    const filteredList = produtos.filter((elements) => {
        if (pesquisa === "") {
            return elements;
        } else {
            console.log(elements.nome.toLowerCase().includes(pesquisa));
            if (elements === null) {
                return (vazio = true);
            }
            return elements.nome.toLowerCase().includes(pesquisa);
        }
    });

    return (
        <>
            <TextField
                type="text"
                className="Search"
                label="Pesquisa"
                name="pesquisa"
                id="pesquisa"
                variant="outlined"
                margin="normal"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPesquisa(e.currentTarget.value)
                }
            />
            <Link to={'/formularioProduto'} className="text-decorator-none cadastroProd ">
                {/* <Box mx={1} display={'flex'} justifyContent='center'>
                    <Button className='' variant="contained" size='small'>
                        Cadastro Produtos
                    </Button>
                </Box> */}
                <Fab color='primary' className='cadastroProdIcon'><AddIcon /></Fab>
            </Link>
            
            <Box display={'flex'} flexWrap={'wrap'} gap={'1rem'}>
                {
                    produtos.map(post => (
                        <Box m={2}>
                            <Card variant="elevation" className="cardprod">
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        produto
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        {post.nome}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {Intl.NumberFormat('pt-br', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(post.preco)}
                                        
                                    </Typography>
                                    <img className="img" src={post.marca} alt='' />
                                    <Typography variant="body2" component="p">
                                        {post.categoria?.descricao}
                                    </Typography>
                                </CardContent>
                                
                                {+userId === 11 ? (
                                    <CardActions>
                                        <Box display="flex" justifyContent="center" mb={1.5}>
                                            <Link to={`/formularioproduto/${post.id}`} className="text-decorator-none" >
                                                <Box mx={1}>
                                                    <Button className="botao" variant="contained" color='primary' size='small'>
                                                        atualizar
                                                    </Button>
                                                </Box>
                                            </Link>
                                            <Link to={`/deletarproduto/${post.id}`} className="text-decorator-none">
                                                <Box mx={1}>
                                                    <Button className='botao' variant="contained" size='small' color="secondary">
                                                        deletar
                                                    </Button>
                                                </Box>
                                            </Link>
                                        </Box>
                                        <Link to={'/steps'} className="text-decorator-none">
                                        <Box mx={0} display="flex" justifyContent="center" mb={1.5}>
                                        <Button className='botao' onClick={handleAddToCart} variant='contained' size='small' color='secondary'>
                                                Comprar
                                            </Button>
                                        </Box>
                                        </Link>

                                    </CardActions>
                                ) : <></>}

                            </Card>
                        </Box>
                    ))
                }
            </Box>
        </>
    )
}

export default ListaProduto;