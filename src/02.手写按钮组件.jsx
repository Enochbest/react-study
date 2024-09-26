import { QfButton } from './QfAntd';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function App() {
  return (
    <div>
      <QfButton>按钮一</QfButton>
      <QfButton type="primary">按钮二</QfButton>
      <QfButton type="primary" danger>
        按钮三
      </QfButton>
      <QfButton danger>按钮四</QfButton>
      <QfButton danger size={'small'}>
        按钮四
      </QfButton>
      <QfButton danger size={'large'}>
        按钮
      </QfButton>
      <QfButton danger size={'large'} icon={<SearchOutlined />}>
        按钮
      </QfButton>
      <br />
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </div>
  );
}
export default App;
