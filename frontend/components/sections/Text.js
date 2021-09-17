import Markdown from 'react-markdown';

const Text = ({ data }) => {
  return (
    <div>
      <Markdown>{data.textbox}</Markdown>
    </div>
  );
};

export default Text;
