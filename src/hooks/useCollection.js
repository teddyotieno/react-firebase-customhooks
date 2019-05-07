import { useEffect, useState } from "react";
import { db } from "../utils/firebase";

function useCollection(path, orderBy) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    let collection = db.collection(path);

    if (orderBy) {
      collection = collection.orderBy(orderBy);
    }

    collection.onSnapshot(snapshot => {
      const docs = [];
      snapshot.forEach(doc => {
        docs.push({
          ...doc.data(),
          id: doc.id
        });
      });
      setDocs(docs);
    });
  }, []);

  return docs;
}

export default useCollection;
