import { Txt, Container } from './styles';

type Props ={
    title: string;
}

export function Text({ title }: Props){
    return (
        <Container>
            <Txt>
                {title}
            </Txt>
        </Container>
    );
}