import styled from "styled-components";

export const Container = styled.div`
    display: grid; // rectangles one next to the other -> flex would also work
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
    }

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong{
        display: block; // makes the margin-top work -> strong comes as inline
        margin-top: auto;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }
    
    &.highlight-background{
        background: var(--green);
        color: #fff;
    }
`;
