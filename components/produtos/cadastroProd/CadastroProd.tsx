import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroProd.css';
import { useNavigate, useParams } from 'react-router-dom'
import { busca, buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';
import Produto from '../../../models/Produto';
import Categoria from '../../../models/Categoria';

function CadastroProd() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
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
    const [categoria, setCategoria] = useState<Categoria>(
        {
            id: 0,
            descricao: '',
            nome:''
        })
    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        quantidade: 0,
        preco: 0,
        marca:'',
        peso:0,
        data: '',
        categoria: null
    })

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria
        })
    }, [categoria])

    useEffect(() => {
        getCategoria()
        if (id !== undefined) {
            findByIdproduto(id)
        }
    }, [id])

    async function getCategoria() {
        await busca("/categoria", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdproduto(id: string) {
        await buscaId(`produto/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedproduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/produto`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('produto atualizado com sucesso');
        } else {
            post(`/produto`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('produto cadastrado com sucesso');
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
                <TextField value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedproduto(e)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value={produto.quantidade} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedproduto(e)} id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />
                <TextField value={produto.marca} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedproduto(e)} id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />
                <TextField value={produto.peso} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedproduto(e)} id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />
                <TextField value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedproduto(e)} id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />
                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">categoria </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/Categoria/${e.target.value}`, setCategoria, {
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