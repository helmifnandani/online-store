const AnnouncementBarItem = ({ item }) => {
  return (
    <div className="text-md flex justify-center tracking-wider">
      {item.announcementtext}
    </div>
  );
};

export default AnnouncementBarItem;
