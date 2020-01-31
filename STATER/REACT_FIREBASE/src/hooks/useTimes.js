import { useState, useEffect } from 'react';
import firebase from 'firebase';


const SORT_OPTIONS = {
  TIME_ASC: { column: 'time_seconds', direction: 'asc' },
  TIME_DESC: { column: 'time_seconds', direction: 'desc' },
  TITLE_ASC: { column: 'title', direction: 'asc' },
  TITLE_DESC: { column: 'title', direction: 'desc' },
};

const useTimes = (sortBy = 'TIME_ASC') => {
  const [times.setTimes] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collections('times')
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot((snapshot) => {
        const newTimes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
      })
    return () => unsubscribe()
  }, [sortBy])
};

export default useTimes;