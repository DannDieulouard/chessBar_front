export const PhotosConcept = {
    getData() {
        return [
            {
                itemImageSrc: 'https://i.imgur.com/Nt1g1r8.png',
                thumbnailImageSrc: 'https://i.imgur.com/337nkh4.png',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'https://i.ibb.co/9WdsQGQ/Capture-d-cran-2024-06-11-165651.png',
                thumbnailImageSrc: 'https://i.ibb.co/KyYn5mK/Capture-d-cran-2024-06-11-165651-1.png',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'https://i.imgur.com/jJGzI6N.png',
                thumbnailImageSrc: 'https://i.imgur.com/iiPG0Va.png',
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
            {
                itemImageSrc: 'https://i.ibb.co/3ybD8mh/Capture-d-cran-2024-06-11-170706.png',
                thumbnailImageSrc: 'https://i.ibb.co/zfLQTPT/Capture-d-cran-2024-06-11-170706-1.png',
                alt: 'Description for Image 4',
                title: 'Title 4'
            },
            {
                itemImageSrc: 'https://i.ibb.co/DkhG4f1/dsc8526-1.jpg',
                thumbnailImageSrc: 'https://i.ibb.co/BfwfjPG/dsc8526-2.jpg',
                alt: 'Description for Image 5',
                title: 'Title 5'
            },
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};