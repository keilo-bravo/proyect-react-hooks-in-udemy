import React, { useState } from 'react';
//'@material-ui/core' libreria de estilos como boostrap
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core';

export default function Home(){
	const [searchText, setSearchText] = useState ('');

	//al ser invocada realiza cambios en el useState
	function handleSearchTextChange (event){
		setSearchText(event.target.value)
	};

	function handleCleanTextClick(event){
		console.log(10);
	};
	function handleSearchTextClick(event){
		console.log(20);
	};

	return (
		<Container>
			<Card>
				<Grid container>
					<Grid>
						<Typography> Welcome</Typography>
					</Grid>
					<Grid>
						<label>Icon</label>
					</Grid>
				</Grid>
				<TextField
					value = {searchText}
					/*placeholder nos deja un comentario informativo*/
					placeholder="Buscar. . ."
					/*onChange ante cualquier cambio invoca a algo*/
					onChange={handleSearchTextChange}
				/>
				<Grid>
					<Button variant="contained" onClick={handleCleanTextClick}>Limpiar</Button>
					<Button variant="contained" onClick={handleSearchTextClick}>Buscar</Button>
				</Grid>
			</Card>	
		</Container>
		);
}