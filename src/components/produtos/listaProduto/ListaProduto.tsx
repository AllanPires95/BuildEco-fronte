import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { busca } from '../../../services/Service';
import Produto from '../../../models/Produto';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';


function ListaProduto() {
const [posts, setPosts] = useState<Produto[]>([])
const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
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

}, [posts.length])

return (
    <>
    {
        posts.map(post => (
        <Box m={10}>
            <Card variant="elevation" className="cardprod">
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                produto
                </Typography>
                <Typography variant="h5" component="h2">
                {post.nome}
                </Typography>
                <Typography variant="body2" component="p">
                {post.preco}
                </Typography>
                <img className="img" src={post.marca} alt='' />
                <Typography variant="body2" component="p">
                {post.categoria?.descricao}
                </Typography>
            </CardContent>


            <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>
                <Link to={`/formularioproduto/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                    <Button className="btnAtualizar" variant="contained" size='small'>
                        atualizar
                    </Button>
                    </Box>
                </Link>
                <Link to={`/deletarproduto/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                    <Button variant="contained" size='small' color="secondary">
                        deletar
                    </Button>
                    </Box>
                </Link>
                </Box>
            </CardActions>
            </Card>
        </Box>
        ))
    }
    </>
)
}

export default ListaProduto;