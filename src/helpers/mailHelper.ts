import config from 'config';

const exports = {
  sendMail
};

function sendMail(subject?: string) {
  const email = config.socialMedia.email;
  const subjectParam = subject ? `?subject=${subject}` : '';
  window.open(`mailto:${email}${subjectParam}`);
}

export default exports;
