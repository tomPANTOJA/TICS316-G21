import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import './Publicaciones.css';
import Post from './Post'
import Avatar from '@mui/material/Avatar';
import Popup from './popup';



function Articles() {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const handlePostClick = (post) => {
        setSelectedPost(post);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const [newPost, setNewPost] = useState({
        username: "TomasPantoja",
        avatarImage: "/static/images/avatar/1.jpg",
        image: "",
        title: "",
        description: ""
    });

    const [posts, setPost] = useState([
        {
            username: "TomasPantoja",
            avatarImage: "/static/images/avatar/1.jpg",
            image: "00ejis46.jpg",
            title: "Museo Conceptual, Asia",
            description: "Bienvenido al Museo Conceptual, un espacio único donde las fronteras entre el arte y la imaginación se difuminan, creando una experiencia verdaderamente inmersiva. Este museo va más allá de las tradicionales galerías para explorar las infinitas posibilidades de la creatividad y el pensamiento conceptual."
        },
        {
            username: "TomasPantoja",
            avatarImage: "/static/images/avatar/1.jpg",
            image: "00ejis46.jpg",
            title: "Museo Conceptual, Asia",
            description: "Bienvenido al Museo Conceptual, un espacio único donde las fronteras entre el arte y la imaginación se difuminan, creando una experiencia verdaderamente inmersiva. Este museo va más allá de las tradicionales galerías para explorar las infinitas posibilidades de la creatividad y el pensamiento conceptual."
        },
        {
            username: "TomasPantoja",
            avatarImage: "/static/images/avatar/1.jpg",
            image: "00ejis46.jpg",
            title: "Museo Conceptual, Asia",
            description: "Bienvenido al Museo Conceptual, un espacio único donde las fronteras entre el arte y la imaginación se difuminan, creando una experiencia verdaderamente inmersiva. Este museo va más allá de las tradicionales galerías para explorar las infinitas posibilidades de la creatividad y el pensamiento conceptual."
        },
        {
            username: "TomasPantoja",
            avatarImage: "/static/images/avatar/1.jpg",
            image: "00ejis46.jpg",
            title: "Museo Conceptual, Asia",
            description: "Bienvenido al Museo Conceptual, un espacio único donde las fronteras entre el arte y la imaginación se difuminan, creando una experiencia verdaderamente inmersiva. Este museo va más allá de las tradicionales galerías para explorar las infinitas posibilidades de la creatividad y el pensamiento conceptual."
        },
        {
            username: "FerUai2018",
            avatarImage: "retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.avif",
            image: "123.jpg",
            title: "CNC X8 exagonal",
            description: "Una fresadora CNC (Control Numérico Computarizado) exagonal X8 es una herramienta de vanguardia diseñada para la fabricación precisa y eficiente. Con su configuración hexagonal única, este equipo ofrece una versatilidad excepcional al permitir el mecanizado desde seis direcciones distintas. Cada eje proporciona un movimiento controlado por ordenador, lo que significa que la fresadora puede realizar cortes y grabados precisos en diferentes ángulos y profundidades. La disposición exagonal optimiza la eficiencia al permitir un acceso más completo a la pieza de trabajo, lo que es especialmente beneficioso para proyectos complejos que requieren múltiples enfoques de corte. Además, la CNC exagonal X8 destaca por su capacidad para manejar una variedad de materiales con precisión, desde maderas y plásticos hasta metales, brindando a los fabricantes y diseñadores una herramienta potente y versátil para dar vida a sus proyectos con un nivel excepcional de detalle y exactitud."
        }
    ]);

    useEffect(() => {

    }, [posts]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost({
            ...newPost,
            [name]: value
        });
    };

    return (
        <div className="Articles">

            <div className="Articles_header">
                <div className='left_header'>
                    <img
                        className="Articles_headerImage"
                        src='/logoR.png'
                        alt="logo rawcreate"
                        width="auto"
                        height="40"
                    />
                </div>

                <Link to="/publicaciones">
                    <img
                        className="Articles_Imagebrand"
                        src='/Captura_de_pantalla_2023-11-16_233049-removebg-preview.png'
                        alt="rawcreate"
                        height="40"
                        width="auto"

                    />

                </Link>


                <div className='rigth_header'>

                    <Link className='logout_button' to="/">
                        Cerrar sesión
                    </Link>

                    <Link to="/perfil">
                        <Avatar
                            className='post_avatar'
                            alt="Tomas Pantoja"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 30, height: 30 }}
                        />
                    </Link>

                </div>

            </div>

            <Link to="/perfil">
            </Link>



            <div className='body'>

                <div className='posts'> {
                    posts.map(post => (
                        <Post
                            key={post.id}
                            username={post.username}
                            avatarImage={post.avatarImage}
                            image={post.image}
                            title={post.title}
                            description={post.description}
                            onClick={() => handlePostClick(post)}
                        />
                    ))
                }
                </div>
                <div className='upload'>
                    <h2>Subir Publicación</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        // Agregar lógica para agregar el nuevo post al estado 'posts'
                        setPost([...posts, newPost]);
                        // Limpiar los campos del formulario
                        setNewPost({
                            username: "TomasPantoja",
                            avatarImage: "/static/images/avatar/1.jpg",
                            image: "",
                            title: "",
                            description: ""
                        });
                    }}>
                        <label>Titulo:</label>
                        <input
                            type="text"
                            name="title"
                            value={newPost.title}
                            onChange={handleInputChange}
                        />
                        <label>Descripción:</label>
                        <textarea
                            name="description"
                            value={newPost.description}
                            onChange={handleInputChange}
                        />
                        <label>Imagen:</label>
                        <input
                            type="file"
                            name="image"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                    setNewPost({
                                        ...newPost,
                                        image: reader.result
                                    });
                                };
                                if (file) {
                                    reader.readAsDataURL(file);
                                }
                            }}
                        />
                        <button type="submit">Agregar Post</button>
                    </form>

                </div>
                {showPopup && <Popup post={selectedPost} onClose={handleClosePopup} />}
            </div>

            

            <div class="footer-basic">
                <footer>

                    <div className="list-inline">
                        <ul>
                            <Link to="/home"><li class="list-inline-item"><a href="#">Inicio</a></li></Link>
                            <Link to="/contact"><li class="list-inline-item"><a href="#">Contactos</a></li></Link>
                            <Link to="/publicaciones"><li class="list-inline-item"><a href="#">Publicaciones</a></li></Link>
                            <Link to="/about"><li class="list-inline-item"><a href="#">RawCreate</a></li></Link>
                        </ul>
                    </div>

                    <div className="copyright">
                        <p >RawCreate © 2023</p>
                    </div>


                    <div class="social">
                        <h5>Equipo:</h5>
                        <a href="https://www.linkedin.com/in/tom%C3%A1s-pantoja-gallinal-97895a234/">
                            <Avatar
                                className='post_avatar'
                                alt="Tomas Pantoja"
                                src="319741640_219558007179500_3440059218991782107_n.jpg"
                                sx={{ width: 40, height: 40 }}
                            />

                        </a>
                        <a href="#">
                            <Avatar
                                className='post_avatar'
                                alt="Agustin Vargas"
                                src="Agustin.png"
                                sx={{ width: 40, height: 40 }}
                            />

                        </a>
                        <a href="#">
                            <Avatar
                                className='post_avatar'
                                alt="Benjamin Gonzalez"
                                src="benjamin.png"
                                sx={{ width: 40, height: 40 }}
                            />

                        </a>
                    </div>





                </footer>
            </div>



        </div>
    );
}

export default Articles;
