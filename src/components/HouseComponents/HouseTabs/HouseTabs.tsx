import { useState } from 'react';
import SelectedHouseTab from './SelectedHouseTab';
import styles from './HouseTabs.module.scss';

const HouseTabs: React.FC = () => {
  const [tabNumber, setTabNumber] = useState(0);

  const changeTab = (e: MouseEvent | any) => {
    const { tabIndex } = e.target;
    setTabNumber(tabIndex);
  };

  return (
        <div className={styles.house__tabs}>
            <div className='container'>
                <div className='d-flex'>
                    <aside>
                    <p>Tabs</p>
                        {/* There's a bug here */}
                        <ul onClick={changeTab}>
                            <li tabIndex={0}>TAB1</li>
                            <li tabIndex={1}>TAB2</li>
                            <li tabIndex={2}>TAB3</li>
                            <li tabIndex={3}>TAB4</li>
                            <li tabIndex={4}>TAB5</li>
                        </ul>
                    </aside>
                    <div className='house__tabs__components'>
                        <SelectedHouseTab tabIndex={tabNumber} />
                    </div>
                </div>
            </div>
        </div>
  );
};

export default HouseTabs;
