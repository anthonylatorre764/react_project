import "../styles/base.css"

const Table = () => {
    // JSX Fragment
  return (
    <>
        <table>
          <tr>
            <th>Student</th>
            <th>Sport</th>
            <th>Favorite Color</th>
          </tr>
          <tr>
            <td>Billy</td>
            <td>Football</td>
            <td>Orange</td>
          </tr>
          <tr>
            <td>Theo</td>
            <td>Soccer</td>
            <td>Red</td>
          </tr>
          <tr>
            <td>Annie</td>
            <td>Tennis</td>
            <td>Purple</td>
          </tr>
        </table>
    </>
  )
}

export default Table