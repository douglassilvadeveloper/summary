type FooterProps = {
  text: string;
};

function Footer({ text }: FooterProps) {
  return (
    <footer className="p-1 flex-row f-center border-top-light-1">
      <div className="px-1">{text}</div>
    </footer>
  );
}

export default Footer;
