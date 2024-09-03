const AnnouncementBarItem = ({ item }) => {
  return (
    <div className="text-md flex justify-center tracking-wider">
      {item.text}
    </div>
  );
};

export default AnnouncementBarItem;
