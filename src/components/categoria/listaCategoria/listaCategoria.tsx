import React, { useState, useEffect, ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography, Fab, TextField } from '@material-ui/core';
import { Box } from '@mui/material';
import './listaCategoria.css';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../services/Service';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Categoria from '../../../models/Categoria';
import { TokenState } from '../../../store/tokens/TokensReducer';
import AddIcon from '@mui/icons-material/Add'

function ListaCategoria() {
    const [categoria, setCategoria] = useState<Categoria[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    const userId = useSelector<TokenState, TokenState["id"]>(
        (state) => state.id
    );
    let navigate = useNavigate();
      
    

    useEffect(() => {
        if (token == '') {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")
        }
    }, [token])


    async function getcategoria() {
        await busca("/categoria", setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }


    useEffect(() => {
        getcategoria()
    }, [categoria.length])

    
    const [pesquisa, setPesquisa] = useState("");

    let vazio: boolean = false;

    const filteredList = categoria.filter((elements) => {
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
                label= "Pesquisa"
                name="pesquisa"
                id="pesquisa"
                variant="outlined"
                margin="normal"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPesquisa(e.currentTarget.value)
                }
            />
          <Link to={'/formularioCategoria'} className="text-decorator-none cadastroProd ">
                {/* <Box mx={1} display={'flex'} justifyContent='center'>
                    <Button className='' variant="contained" size='small'>
                        Cadastro Categoria
                    </Button>
                </Box> */}
                <Fab color='primary' className='cadastroProdIcon'><AddIcon /></Fab>
            </Link>
            {
                categoria.map(categoria => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    categoria
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {categoria.descricao}
                                </Typography>
                            </CardContent>
                            {+userId === 11 ? (
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5} >

                                    <Link to={`/formularioCategoria/${categoria.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarcategoria/${categoria.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions> 
                            ) : <></>}
                        </Card>
                    </Box>
                ))
            }
        </>
    );
}


export default ListaCategoria;