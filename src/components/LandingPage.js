import * as React from 'react';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import SideBar from './SideBar';

function LandingPage() {
    return (
        <div>
        <SideBar></SideBar>
        <Container style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="/flower_project.jpg" target="_blank" rel="noopener noreferrer">
                <img
                    src="/flower_project.jpg"
                    alt="Flower Project"
                    style={{ width: '300px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', marginBottom: '1.5rem' }}
                />
            </a>
            <Button variant="contained">Hello world</Button>
            </Container>
            </div>
    );
}

export default LandingPage;