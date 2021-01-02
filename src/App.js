import { useState, useEffect } from 'react';
// import { Checkbox, Modal, List } from 'antd-mobile';
import { Checkbox, List, Modal } from 'antd-mobile';
const { CheckboxItem } = Checkbox;
function App() {
  const [checkboxValue, setCheckboxValue] = useState(false); // 优秀作业的选中状态
  const [visible, setVisible] = useState(false); // 遮罩层

  useEffect(() => {
    if (checkboxValue) {
      setVisible(true);
    }
  }, [checkboxValue]);

  // 关闭遮罩层
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className='App'>
      <List>
        <CheckboxItem checked={checkboxValue} onClick={() => setCheckboxValue(!checkboxValue)}>
          已选为优秀作业
        </CheckboxItem>
      </List>
      <Modal
        popup
        afterClose={() => {
          alert('afterClose');
        }}
        visible={visible}
        onClose={onClose}
        animationType='slide-up'
      >
        <p>1111111111</p>
      </Modal>
    </div>
  );
}

export default App;
