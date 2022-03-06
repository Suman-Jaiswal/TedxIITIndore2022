import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import Data from '../../data/Data'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from "react-images";
import Heading from '../../components/Heading';
import "./GalleryPage.css"
export default function GalleryPage() {

    const [gallery, setGallery] = useState([])
    useEffect(() => {
        setGallery(Data().gallery)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div className="gallery">
            <div className="photos">
                <Gallery photos={gallery} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={gallery.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </div>
    );
}
