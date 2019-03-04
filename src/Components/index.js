import React, { Component } from 'react';

const photos = [
    { src: '/images/vict-baby.png' },
    { src: '/images/ned.jpeg' },
    { src: '/images/devilgirl.jpg' },
    { src: '/images/trump.jpg' },
    { src: '/images/one-does-not.jpg' },
    { src: '/images/dank.png' },
    { src: '/images/boy.png' },
    { src: '/images/sad.png' },
    { src: '/images/wolf.png' },
    { src: '/images/fry.jpg' },
    { src: '/images/jobs.jpg' },
    { src: '/images/phone.jpg' },
    { src: '/images/oldie.png' },
    { src: '/images/image.png' },
    { src: '/images/doubt.png' },
    { src: '/images/crying.png' },
    { src: '/images/sponge.png' },
    { src: '/images/dog.png' },
    { src: '/images/frust.png' },
    { src: '/images/web.png' },
    { src: '/images/penguin.png' }
];

const initialState = {
    toptext: "", // Top caption of the meme
    bottomtext: "", // Bottom caption of the meme
    isTopDragging: false, // Checking whether top text is repositioned
    isBottomDragging: false,  // Checking whether bottom text is repositioned
    // X and Y coordinates of the top caption
    topY: "10%",  
    topX: "50%",
    // X and Y coordinates of the bottom caption
    bottomX: "50%",
    bottomY: "90%"
  }


class index extends Component {
    constructor(){
        super();
        this.state = {
            currentImage : 0,
            modalIsOpen : false,
            currentImagebase64: null,
            ...initialState
        }
    }

    getBase64Image(img){
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL('image/png');
        return dataURL;
    }

    openImage = (index) => {
        const image = photos[index];
        const base_image = new Image();
        base_image.src = image.src;
        const currentImagebase64 = this.getBase64Image(base_image);
        this.setState(prevState => ({
            currentImage : index,
            modalIsOpen : !prevState.modalIsOpen,
            currentImagebase64,
            ...initialState
        }));
    }


    render() {
        return (
            <div className="content">>
                {photos.map((image, index) => (
                    <div className="image-holder" key={image.src}>
                        <span className="meme-top-caption">Top text</span>
                        <img
                        style={{
                            width: "100%",
                            cursor: "pointer",
                            height: "100%"
                        }}
                        alt={index}
                        src={image.src}
                        onClick={() => this.openImage(index) /* The onclick here determines current image */}
                        role="presentation"
                        />
                        <span className="meme-bottom-caption">Bottom text</span>
                    </div>
                ))}
            </div>
        );
    }
}

export default index;