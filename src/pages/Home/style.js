import { makeStyles } from '@material-ui/styles'

const centerStyleObj = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'	
}

export default makeStyles ({
	container: {
		height: '100vh',
		flexDirection: 'column',
		...centerStyleObj
	},
	cardContainer:{
		flexDirection: 'column',
		backgroundColor: '#E0E0E0',
		width: 400,
		height: 200,
		padding: '2rem',
		...centerStyleObj
	},
	title: {
		fontSize: '3.8rem'
	},
	titleGirdContainer: {
		...centerStyleObj
	},
	TextFieldSearch:{
		width: '90%'
	},
	searchButton:{
		backgroundColor: '#AEEA00',
		marginLeft: '.5rem',
		paddingLeft: '1.5rem',
		paddingRight: '1.5rem'
	},
	buttonClear:{
		backgroundColor: '#81D4FA',
		paddingLeft: '1rem',
		paddingRight: '1rem'
	},
	buttonContainer:{
		marginTop: '.5rem'
	}
});
