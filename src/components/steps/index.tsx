import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Alert, StepLabel } from '@mui/material';
import { useState } from 'react';
import { ListaProduto } from '../produtos/listaProduto/ListaProduto'
import { Delivery } from '../Delivery/delivery';
import { Payment } from '../Payment/pagamentos';
import { toast } from 'react-toastify';

export function Steps() {
    const [currentStep, setCurrentStep] = useState(0);

    function next() {
        setCurrentStep(currentStep + 1);

    }
    function back() {
        setCurrentStep(currentStep - 1);
    }

    return (
        <Box sx={{ widhth: "100%" }} >
            <Stepper activeStep={currentStep}>
                <Step>
                    <StepLabel>Produtos</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Método de entrega</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Pagamento</StepLabel>
                </Step>
            </Stepper>

            {currentStep === 0 && <ListaProduto />}
            {currentStep === 1 && <Delivery />}
            {currentStep === 2 && <Payment />}

            {currentStep === 3 ? 
                toast.success('Pagamento efetuado com sucesso! Confira se e-mail', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }): (
            <>
                <Button onClick={back}>Voltar</Button>
                <Button onClick={next}>Próximo</Button>
            </>
            )}



        </Box>
    )
}