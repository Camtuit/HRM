import Swal from 'sweetalert2';

function Alert(props) {
  const { type, title, content } = props;
  const renderIcon = () => {
    switch (type) {
      case 'SUCCESS':
        return 'success';
      case 'ERROR':
        return 'error';
      case 'WARNING':
        return 'warning';
      case 'INFO':
        return 'info';
      case 'QUESTION':
        return 'question';
      default:
        return '';
    }
  };
  Swal.fire({
    title,
    text: content,
    icon: renderIcon(),
    confirmButtonText: 'OK',
  });
}

export default Alert;
