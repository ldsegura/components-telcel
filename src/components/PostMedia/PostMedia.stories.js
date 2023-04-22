import PostMedia from "./PostMedia";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: 'Example/PostMedia',
    component: PostMedia,
    //tags: ['autodocs'],
    argTypes: {
        //backgroundColor: { control: 'color' },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
    args: {
        primary: true,
        label: 'Button',
        item: {
            name: "Grupo Promotora Residencial Hazael Medina",
            "picture": "https://social-network.sicssa-lab.com/assets/images/street-turbo/logo.png",
            "createDate": "2022-06-13 05:49:36",
            hasPremium: true,
            //"name": "Street turbo",
            "likes": 367,
            "type": "video",
            description: `Espacio creado para venta y compra de productos nuevos o usados para la modificación de automóviles. Que nada te impida recorrer todos los caminos, conoce nuestra amplia variedad de servicios para que elijas el que mejor se adapte a las necesidades de tu vehículo.`,
            "videos": [
                "https://social-network.sicssa-lab.com/assets/videos/street-turbo/WhatsApp Video 2023-04-12 at 10.20.39 PM.mp4",
                "https://social-network.sicssa-lab.com/assets/videos/street-turbo/WhatsApp Video 2023-04-12 at 10.20.39 PM.mp4",
                "https://social-network.sicssa-lab.com/assets/videos/street-turbo/WhatsApp Video 2023-04-12 at 10.20.39 PM.mp4"
            ],
            "gallery": [],
            "comments": [
                {
                    "picture": "https://social-network.sicssa-lab.com/assets/images/avatars/5556512.png",
                    "comment": "Me encanta su contenido",
                    "createDate": "2022-06-13 05:49:36"
                },
                {
                    "picture": "https://social-network.sicssa-lab.com/assets/images/avatars/beautiful-latin-woman-avatar-character-icon-free-vector.jpg",
                    "comment": "Donde se encuentra eso??",
                    "createDate": "2022-06-13 05:49:36"
                },
                {
                    "picture": "https://social-network.sicssa-lab.com/assets/images/avatars/5556549.png",
                    "comment": "De lujo",
                    "createDate": "2022-06-13 05:49:36"
                },
                {
                    "picture": "https://social-network.sicssa-lab.com/assets/images/avatars/beautiful-woman-red-hair-in-frame-circular-avatar-character-free-vector.webp",
                    "comment": "vamos a ir @pedro",
                    "createDate": "2022-06-13 05:49:36"
                },
                {
                    "picture": "https://social-network.sicssa-lab.com/assets/images/avatars/png-clipart-advertising-service-blog-internet-avatar-woman-face-black-hair.png",
                    "comment": "ese evento se hizo el año pasado y estuvo genial",
                    "createDate": "2022-06-13 05:49:36"
                },
                {
                    "picture": "https://social-network.sicssa-lab.com/assets/images/avatars/placeholder.png",
                    "comment": "Donde se encuentra eso??",
                    "createDate": "2022-06-13 05:49:36"
                },
                {
                    "picture": "https://social-network.sicssa-lab.com/assets/images/avatars/3641963.png",
                    "comment": "Me encanta su contenido",
                    "createDate": "2022-06-13 05:49:36"
                },
                {
                    "picture": "https://social-network.sicssa-lab.com/assets/images/avatars/images.png",
                    "comment": "Donde se encuentra eso??",
                    "createDate": "2022-06-13 05:49:36"
                }
            ]
        }
    },
};
