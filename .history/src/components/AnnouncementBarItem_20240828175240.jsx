const AnnouncementBarItem = ({ item }) => {
  console.log(item);
  return <div className="flex justify-center">{item.text}</div>;
};

export default AnnouncementBarItem;
