import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getImageAction, resetAllStateAction } from "../../state/actions/action";

const styles = {
    container: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center'
    },
    button: {
        fontSize: '17px',
        height: '35px',
        width: '70px',
        margin: '10px',
        background: '#333',
        color: '#fff',
        border: '1px solid black',
    }
}

const Home = (props) => {

    useEffect(() => {
        props.resetAllState();
    }, [])


    return (
        <div style={styles.container} data-testid="home-page">
            <Link to="/randomimage">
                <button data-testid="start-button" style={styles.button} onClick={() => props.getImage()}>
                    Start
            </button>
            </Link>
        </div>
    )
}

const MapDispatchToProps = (dispatch) => {
    return {
        resetAllState: () => dispatch(resetAllStateAction()),
        getImage: () => dispatch(getImageAction())
    }
}

export default connect(null, MapDispatchToProps)(Home);