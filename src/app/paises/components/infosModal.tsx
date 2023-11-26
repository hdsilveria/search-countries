import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 4,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function InfosModal(
    props: {
        open: boolean,
        infos: any,
        onClose: () => void 
    },
){
    function close(){
        props.onClose() 
    }

    console.log(props.infos)

    return (
        <Modal
            open={props.open}
            onClose={close}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box sx={{ ...style, width: 500 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <h5>País</h5>
                        <p>{props.infos.name?.common}</p>
                    </Grid>
                    <Grid item xs={4}>
                        <h5>Capital</h5>
                        <p>{props.infos.capital[0]}</p>
                    </Grid>
                    <Grid item xs={4}>
                        <h5>Idiomas</h5>
                        {
                            Object.values(props.infos.languages).map((language: any) => 
                                (
                                    <p>{language}</p>
                                )
                            )
                        }
                        <p></p>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}