/* eslint-disable max-len */
import { useState } from 'react';
import styles from './HouseDocuments.module.scss';
import docs from './documents.json';

const HouseDocuments: React.FC = () => {
  const [selectedDocument, setSelectedDocument] = useState({
    file_name: 'Selecteer een bestand om te downloaden',
    uri: '',
  });
  const addFocusBorder = (
    e: MouseEvent | any,
    file_name: string,
    uri: string,
  ) => {
    e.preventDefault();
    e.target.parentNode.parentNode.style.boxShadow = '0 0 0 2px #83c056';
    setSelectedDocument({ file_name, uri });
  };
  const removeFocusBorder = (e: MouseEvent | any) => {
    e.preventDefault();
    e.target.parentNode.parentNode.style.boxShadow = 'none';
    setSelectedDocument({
      file_name: 'Selecteer een bestand om te downloaden',
      uri: '',
    });
  };

  const Docs: any = () => docs.map<{ file_name: string; uri: string }>(
    ({ file_name, uri }, index): any => (
        <li className='d-flex align-items-center gap-xl-10'>
          <div>
            {/* It's a bit buggy */}
            <a
              href={uri}
              download={file_name}
              tabIndex={index}
              onFocus={(e) => addFocusBorder(e, file_name, uri)}
              onBlur={removeFocusBorder}
            >
              {file_name}
            </a>
          </div>
          <div
            className={
              styles.house__documents__download__icon
              + ' d-flex justify-content-center align-items-center'
            }
          >
            <img src='/icons/download.svg' alt='download' />
          </div>
        </li>
    ),
  );
  return (
    <div className={styles.house__documents}>
      <div className='container'>
        <h3>Documenten & plannen</h3>
        <p>
          Download de belangrijkste documenten in verband met dit pand, alsook
          de plannen.
        </p>
        <div className='d-flex'>
          <div className={styles.house__documents__files + ' d-flex'}>
            <ul className='d-flex'>
                <Docs />
            </ul>
          </div>
          <div className={styles.house__documents__download + ' d-flex'}>
            <div className='d-flex justify-content-center align-items-center'>
              <img src='/librafire_product_logo.svg' alt='logo' />
              <div className={styles.house__documents__download__info}>
                <p>{selectedDocument.file_name}</p>
                <div className='d-flex justify-content-center'>
                  <a
                    className='text-center'
                    href={selectedDocument.uri}
                    download={selectedDocument.file_name}
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDocuments;
