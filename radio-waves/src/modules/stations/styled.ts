import styled from 'styled-components';

export const StationsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
`;

export const FilterWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 1.2rem;
    width: 100%;
    max-width: 60em;
    margin-bottom: 40px;
`;

export const Filter = styled.span<{ isSelected: boolean }>`
    cursor: pointer;
    display: flex;
    padding: 0.25em 0.75em;
    border-radius: 30px;
    border: 2px solid purple;
    transition: color 0.3s;
    margin: 0.5em;
    background: ${props => (props.isSelected ? 'purple' : 'linear-gradient(to bottom, #121212, #000000)')};

    &:hover {
        background: ${props => (props.isSelected ? 'purple' : 'purple')};
    }
`;

export const FilterLabel =styled.span`
    @media (max-width: 767px) {
        font-size: 16px;
    }
`