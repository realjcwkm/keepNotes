import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { InputBase } from '@material-ui/core';


import Layout from './components/Layout';
import ListaDeTarefas from './components/ListaDeTarefas';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

function pegarTarefasCadastradas() {
	const headers = { 'Accept': 'application/json' };

	return axios.get('http://localhost:3000/tarefas', { headers: headers })
		.then((response) => {
			return response.data;
		});
}

function salvarNovaTarefa(data) {
	const headers = { 'Accept': 'application/json' };

	return axios.post('http://localhost:3000/tarefas', data, { headers: headers })
		.then((response) => {
			return response.data;
		});
}

export default function App() {
	const classes = useStyles();

	const [tarefas, setTarefas] = useState([]);
	const [novaTarefa, setNovaTarefa] = useState('');

	useEffect(() => {
		pegarListaDeTarefas();
	}, []);

	function pegarListaDeTarefas() {
		pegarTarefasCadastradas().then((listaDeTarefas) => {
			setTarefas(listaDeTarefas);
		});
	}

	function cadastrarNovaTarefa(event) {
		const ENTER_KEY_CODE = 13;
		if (event.keyCode === ENTER_KEY_CODE) {
			const data = { tarefa: { descricao: novaTarefa, finalizada: false } }

			if (novaTarefa === '') {
				return;
			}

			salvarNovaTarefa(data).then(() => {
				pegarListaDeTarefas();
			});

			setNovaTarefa('');
		}
	}

	function alternarFinalizacaoDaTarefa(tarefa){
		console.log(tarefa.descricao);
	}

	return (
		<div className={classes.root}>
			<Layout />
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Grid container spacing={3} direction="row" justify="center">
					<Grid item xs={12} sm={8}>
						<Card elevation={2}>
							<CardContent style={{ padding: '10px 20px' }}>
								<InputBase placeholder="Criar uma tarefa..."
									fullWidth
									style={{ fontWeight: 500 }}
									value={novaTarefa}
									onChange={(event) => { setNovaTarefa(event.target.value) }}
									onKeyUp={cadastrarNovaTarefa}
								/>
							</CardContent>
						</Card>
					</Grid>
				</Grid>

				<Grid container spacing={2} direction="row" style={{ marginTop: 20 }}>
					<Grid item xs={12} sm={3} xl={2}>
						<ListaDeTarefas tarefas={tarefas} quandoTarefaForClicada={alternarFinalizacaoDaTarefa} />
					</Grid>
				</Grid>
			</main>
		</div>
	);
}
