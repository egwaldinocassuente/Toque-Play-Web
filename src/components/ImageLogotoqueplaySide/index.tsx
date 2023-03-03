type ImageProps = {
    imageSrc: string
    alt: string
}
export default function ImageLogotoqueplaySide(props: ImageProps): JSX.Element {

    const {
        imageSrc,
        alt
    } = props;
    return (
        <div className="logotoqueplay">
            <img src={imageSrc} alt={alt} />
        </div>
    )
}
