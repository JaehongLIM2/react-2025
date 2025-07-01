import { Alert, Button, Table } from "react-bootstrap";

function App16() {
  return (
    <>
      <button className="btn btn primary">저장</button>
      <Button>등록</Button>
      <Button variant="warning">워닝</Button>
      <Button variant="danger">위험</Button>
      <Button>버튼</Button>
      <hr />
      {/*    연습 : 다양한 variant props 값으로 버튼들 만들어 보기*/}
      <Button variant="dark" size="lg">
        아
      </Button>
      <Button variant="light" size="lg">
        아
      </Button>
      <Button variant="info" size="lg">
        아
      </Button>
      <Button variant="link" size="lg">
        아
      </Button>

      <Alert variant="success">알림</Alert>
      {/*    연습 : Alert 만들어보기 */}
      {/*    연습 : */}
      <Alert variant="danger">경고</Alert>
      <Table variant="dark" striped={true} border={true} hover={true}>
        <thead>
          <tr>
            <th>Lorem.</th>
            <th>Doloribus!</th>
            <th>Nostrum?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lorem.</td>
            <td>Quos.</td>
            <td>Eligendi.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Molestias.</td>
            <td>Sequi.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Commodi!</td>
            <td>Officiis.</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Lorem.</td>
            <td>Autem!</td>
            <td>Sequi.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Delectus?</td>
            <td>Ipsum!</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Vero.</td>
            <td>Non!</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Lorem.</td>
            <td>Aliquam!</td>
            <td>Accusamus?</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Laudantium!</td>
            <td>Perferendis.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Doloribus?</td>
            <td>Culpa?</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
export default App16;
