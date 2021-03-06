import { useRef, useState } from 'react';
import signes from './data/signes';
import { getSign } from './helpers';
import Modal from './Modal';
import SigneChinois from './SigneChinois';

function App() {
  const [sign, setSign] = useState('Inconnu');
  const [signIndex, setSignIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const ipt = useRef();
  const signesComposants = signes.map((signe) => (
    <SigneChinois
      nom={signe.nom}
      cheminDeLImage={signe.img}
      desc={signe.description}
      key={signe.id}
    />
  ));
  const calculateSign = () => {
    const val = Number(ipt.current.value);
    const idx = getSign(val);
    setSignIndex(idx);
    setSign(signes[idx].nom);
    setModalVisible(true);
  };
  return (
    <div>
      <div className="py-4">
        Quel est votre année de naissance ?
        <input className="bg-gray-200" ref={ipt} />
        <button className="bg-blue-800 text-white" onClick={calculateSign}>Réponse</button>{sign}
      </div>
      <div className="flex flex-wrap">
        {signesComposants}
      </div>
      <Modal close title="le titre de ma modale" visible={modalVisible} hideModal={() => setModalVisible(false)}>
        <h2>{sign}</h2>
        <p>{signes[signIndex].description}</p>
      </Modal>
    </div>
  );
}

export default App;
