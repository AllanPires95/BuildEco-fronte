import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroPost.css';
import { useNavigate, useParams } from 'react-router-dom'
import produto from '../../../models/produto';
import { busca, buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';
import categoria from '../../../models/categoria';

function CadastroProd() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setcategoria] = useState<categoria[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
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
    const [categoria, setcategoria] = useState<categoria>(
        {
            id: 0,
            descricao: '',
            nome:''
        })
    const [produto, setproduto] = useState<produto>({
        id: 0,
        nome: '',
        quantidade: '',
        preco: '',
        marca:'',
        peso:'',
        data: null
    })

    useEffect(() => {
        setproduto({
            ...produto,
            categoria: categoria
        })
    }, [categoria])

    useEffect(() => {
        getcategorias()
        if (id !== undefined) {
            findByIdproduto(id)
        }
    }, [id])

    async function getcategorias() {
        await busca("/categorias", setcategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdproduto(id: string) {
        await buscaId(`postagens/${id}`, setproduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedproduto(e: ChangeEvent<HTMLInputElement>) {

        setproduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/Postagens`, produto, setproduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('produto atualizada com sucesso');
        } else {
            post(`/Postagens`, produto, setproduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('produto cadastrada com sucesso');
        }
        back()

    }

    function back() {
        navigate('/posts')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro produto</Typography>
                <TextField value={produto.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedproduto(e)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value={produto.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedproduto(e)} id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">categoria </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/categorias/${e.target.value}`, setcategoria, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            categorias.map(categoria => (
                                <MenuItem value={categoria.id}>{categoria.descricao}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um categoria para a produto</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroProd;