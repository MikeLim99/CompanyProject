import '../../assets/css/partners.css';
import image1 from '../../assets/images/partners/image 13.png';
import image2 from '../../assets/images/partners/image 14.png';
import image3 from '../../assets/images/partners/image 15.png';
import image4 from '../../assets/images/partners/image 16.png';

export default function Partners() {

  const images = [image1, image2, image3, image4];

  return (
    <div className="partners">
        {images.map((img)=> (
        <div className="partners-image" key={img}>
          <img src={img} alt="partners" />
        </div>
        ))}
    </div>
  );
}