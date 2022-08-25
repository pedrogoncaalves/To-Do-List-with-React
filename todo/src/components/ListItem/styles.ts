import styled from 'styled-components';



type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({done} : ContainerProps) => (
    
    `display: flex;
    background-color: #9873AC;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;    
    
    
    input {
        width: 20px;
        height: 20px;
        margin-right: 3px;
    }
    
    label {
        color: #FFFFFF;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
    
    `
));
