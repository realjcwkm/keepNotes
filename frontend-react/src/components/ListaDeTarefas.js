import React from 'react';

import Card from '@material-ui/core/Card';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { List } from '@material-ui/core';

export default function ListaDeTarefas(props) {
	return (
			<Card elevation={2}>
				<List style={{ padding: 0 }}>
					{
						props.tarefas.map((tarefa) => {
							return (
								<ListItem dense button key={tarefa.id}
									onClick={ () => { props.quandoTarefaForClicada(tarefa) }
								}>
									<ListItemIcon>
										<Checkbox
											style={{ color: "#616161" }}
											size="small"
											edge="start"
											checked={tarefa.finalizada}
											disableRipple
										/>
									</ListItemIcon>
									<ListItemText primary={tarefa.descricao} />
								</ListItem>
							);
						})
					}
				</List>
			</Card>
	);
}