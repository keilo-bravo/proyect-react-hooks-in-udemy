import React, { useState } from 'react';
//'@material-ui/core' libreria de estilos como boostrap
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core';
import styles from './style';


export default function Home(){
	const [searchText, setSearchText] = useState ('');
	const classes = styles();
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
		<Container className={classes.container} >
			<Card className={classes.cardContainer}>
				<Grid container className={classes.titleGirdContainer} >
					<Grid>
						<Typography className={classes.title} > Welcome ! </Typography>
					</Grid>
					<Grid>
						<label>Icon</label>
					</Grid>
				</Grid>
				<TextField
					value = {searchText}
					/*placeholder nos deja un comentario informativo*/
					placeholder="Buscar. . ."
					className={classes.TextFieldSearch}
					/*onChange ante cualquier cambio invoca a algo*/
					onChange={handleSearchTextChange}
				/>
				<Grid className={classes.buttonContainer} >
					<Button variant="contained" className={classes.buttonClear} onClick={handleCleanTextClick}>Limpiar</Button>
					<Button variant="contained" className={classes.searchButton} onClick={handleSearchTextClick}>Buscar</Button>
				</Grid>
			</Card>	
		</Container>
		);
}