import Header from "../../components/Header";
import Coments from "../../components/Coments";
import { FeedContainer, GistIcon, Main, Post } from "./styles";

function Home() {
    return (
        <>
            <Header />
            <Main>
                <nav>
                    Profile
                </nav>
                <FeedContainer>
                   <PostCard/>
                </FeedContainer>
                <aside>
                    Actions
                </aside>
            </Main>
        </>
    );
}
function PostCard(){
    return(
        <PostCard>
        <header>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
            <div>
                <strong>
                    por Fulano de tal
                </strong>
                <p>
                    em 18/08/2021 às 8:23
                </p>
            </div>
            <GistIcon />
        </header>
        <main>
            <div>
                <h1>Título</h1>
                <p>Descrição da postagem bla bla bla</p>
            </div>
            <img src="https://imagens.ebc.com.br/4rj_mfKEuZORTxK3hjvvHfowiF0=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2020-10-02t234910z_1_lynxmpeg912co_rtroptp_4_soccer-france-psg-ang-report.jpg?itok=GlCFjxmU" />
            <section>
                <p>Front-end</p>
                <p>CSS</p>
                <p>JS</p>
            </section>
        </main>
        <footer>
            <h2>Comentários</h2>
            <Coments/>
        </footer>
    </PostCard>
    );
}

export default Home;