import styled from 'styled-components';

interface FilterProps {
  isSelected: boolean;
}

export const StationsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 90%;
    align-items: center;
    justify-items: center;
    @media (max-width: 768px) {
        /* For screens smaller than 768px width */
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* One or two columns based on available space */
    }
`;

export const FilterContainer = styled.div `
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 1.2rem;
    width: 100%;
    max-width: 60em;
    margin-bottom: 20px;
`;

export const Filter = styled.span<FilterProps> `
    cursor: pointer;
    display: flex;
    padding: 0.25em 0.75em;
    border-radius: 30px;
    border: 2px solid #FFA500;
    transition: color 0.3s;
    margin: 0.5em;
    background: ${props => (props.isSelected ? '#FFA500' : 'linear-gradient(to bottom, #121212, #000000)')};
    flex-wrap: wrap;
    
    &:hover {
        background: ${props => (props.isSelected ? '#FFA500' : '#FFA500')};
    }
`;