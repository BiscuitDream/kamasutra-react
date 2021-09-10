import preloader from './../../../assets/images/preloader.gif';

const Preloader = () => { // TODO поменять гифку на прозрачную картинку, картинку сделать на весь блок модалкой
  return (
    <div>
      <img src={preloader} />
    </div>
  );
};

export default Preloader;
