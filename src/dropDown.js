import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ScrollLazyLoadDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Function to fetch items from the API
  const fetchItems = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://api.example.com/items?page=${page}`);
      const newItems = response.data; // Assuming the API response is an array of items
      setItems((prevItems) => [...prevItems, ...newItems]);
      setIsLoading(false);
      setPage(page + 1);
    } catch (error) {
      console.error('Error fetching items:', error);
      setIsLoading(false);
    }
  };
console.log('items',items)
  // Function to handle scrolling
  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;
    if (scrollTop + clientHeight >= scrollHeight && !isLoading && hasMore) {
      fetchItems();
    }
  };

  // Effect to fetch initial items when dropdown is opened
  useEffect(() => {
    if (isOpen && items?.length === 0) {
      fetchItems();
    }
  }, [isOpen]);

  // Effect to determine if there are more items to load
  useEffect(() => {
    // Example: Assuming there are only 5 pages of items
    if (page > 5) {
      setHasMore(false);
    }
  }, [page]);

  // Function to toggle dropdown state
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" style={{ position: 'relative' }}>
      <button onClick={toggleDropdown} className="dropdown-toggle">
        Select an item
      </button>
      {isOpen && (
        <div className="dropdown-menu" style={{ maxHeight: '200px', overflowY: 'auto' }} onScroll={handleScroll}>
          <ul>
            {items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
            {isLoading && <li>Loading...</li>}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ScrollLazyLoadDropdown;
