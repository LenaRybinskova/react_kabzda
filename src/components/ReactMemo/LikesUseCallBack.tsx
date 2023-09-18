import React, {useCallback, useMemo, useState} from 'react';

export type BookSecretType = {
    addBook: () => void
    books:Array<string>
}


const LikesUseCallBack = () => {
    console.log('отрисовка родит компоненты')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['REACT', 'JS', 'HTML', 'CSS'])
    console.log(books)

    const memoizedBook = useCallback(() => {
        console.log('addBook сработала')
        const newBooks = [...books, 'Angular']
        setBooks(newBooks)
    }, [books])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <br/>
            <Book books={books} addBook={memoizedBook}/>
        </>
    );
}

const BookSecret = (props: BookSecretType) => {
    console.log('BookSecret должна отрис только при изм books')
    return (
        <>
            <button onClick={()=>props.addBook()}>add book</button>
            <div>{props.books.map((b, i) => <div key={i}>{b}</div>)}</div>
        </>
    )
}
const Book = React.memo(BookSecret) // обертка в ХОК


export default LikesUseCallBack;