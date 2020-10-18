import styles from './HousePlanning.module.scss';

// This can be converted to an array of objects
export default () => (
    <div className={styles.house__planning}>
        <div className='container'>
            <h3>Stedenbouwkundige & juridische vermeldingen</h3>
            <div className={styles.house__planning__list}>
                <p>Indeling:</p>
                <ul>
                    <li className='d-flex align-items-center'>
                        <p>Inkomhal:&nbsp;</p>
                        <span>
                            we betreden het appartement via de gezellige
                            inkomhal op tegels.
                            Deze is voorzien van een berging
                            ( Voorzien van CV van het merk Vaillant en een apart toilet.
                        </span>
                    </li>
                    <li className='d-flex align-items-center'>
                        <p>Leefruimte:&nbsp;</p>
                        <span>
                            een gezellige lichte leefruimte op parket
                            met aansluitend de open keuken.
                        </span>
                    </li>
                    <li className='d-flex align-items-center'>
                        <p>Apart toilet:&nbsp;</p>
                        <span>de inkomhal is voorzien van een apart toilet op tegels.</span>
                    </li>
                    <li className='d-flex align-items-center'>
                        <p>Berging aan keuken:&nbsp;</p>
                        <span>
                            een handige berging op tegels met voorziening
                            voor wasmachine en droogkast.
                        </span>
                    </li>
                    <li className='d-flex align-items-center'>
                        <p>Badkamer:&nbsp;</p>
                        <span>
                            de badkamer is voorzien van een ligbad,
                            een douche en een dubbele lavabo met meubel.
                        </span>
                    </li>
                    <li className='d-flex align-items-center'>
                        <p>Keuken:&nbsp;</p>
                        <span>
                            een volledige gerenoveerde keuken
                            (voorzien van oa. oven, elektrische kookplaat,
                            dampkap, vaatwasser, spoelbak, koelkast en kasten.
                        </span>
                    </li>
                    <li className='d-flex align-items-center'>
                        <p>Slaapkamer 1:&nbsp;</p>
                        <span>deze kamer op parket is voorzien tv aansluiting.</span>
                    </li>
                    <li className='d-flex align-items-center'>
                        <p>Slaapkamer 2:&nbsp;</p>
                        <span>
                            deze kamer op parket wordt momenteel gebruikt
                            als walk -in dressing.
                        </span>
                    </li>
                    <li className='d-flex align-items-center'>
                        <p>Slaapkamer 3:&nbsp;</p>
                        <span>deze kamer op parket, biedt direct toegang tot het terras.</span>
                    </li>
                    <li className='d-flex align-items-center'>
                        <p>Terras:&nbsp;</p>
                        <span>een gezellig terras van 23m2 (NW geörienteerd).</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);
