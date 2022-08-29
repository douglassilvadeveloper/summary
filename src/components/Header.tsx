type HeaderProps = {
  nameApp: string;
};

function Header({ nameApp }: HeaderProps) {
  return (
    <header className="flex-row p-1 bg-light border-bottom-light-1">
      <span className="px-1">{nameApp}</span>
    </header>
  );
}

export default Header;
