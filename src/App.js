import Banner from './components/Banner';
import Container, {
  CONTAINER_TYPE_CLASSES,
} from './components/container/container.component';
import { TYPOGRAPHY_TYPE_CLASSES } from './components/typography/typography.component';

function App() {
  return (
    <div className="App">
      <Banner />
      <Container containerType={CONTAINER_TYPE_CLASSES.horizontal}>
        <Container containerType={CONTAINER_TYPE_CLASSES.verticalLimitedWidth}>
          Left Pane
          <Container
            heading="Sorting"
            headerType={TYPOGRAPHY_TYPE_CLASSES.sectionHeaderSmall}
            containerType={CONTAINER_TYPE_CLASSES.verticalLimitedWidth}
          >
            <ul>
              <li>Price low to high</li>
              <li>Price hight to low</li>
              <li>New to old</li>
              <li>Old to new</li>
            </ul>
          </Container>
          <Container
            heading="Brands"
            headerType={TYPOGRAPHY_TYPE_CLASSES.sectionHeaderSmall}
            containerType={CONTAINER_TYPE_CLASSES.verticalLimitedWidth}
          >
            <ul>
              <li>Price low to high</li>
              <li>Old to new</li>
            </ul>
          </Container>
          <Container
            heading="Tags"
            headerType={TYPOGRAPHY_TYPE_CLASSES.sectionHeaderSmall}
            containerType={CONTAINER_TYPE_CLASSES.verticalLimitedWidth}
          >
            <ul>
              <li>Price low to high</li>
              <li>Old to new</li>
            </ul>
          </Container>
        </Container>

        <Container containerType={CONTAINER_TYPE_CLASSES.vertical}>
          <Container
            heading="Products"
            containerType={CONTAINER_TYPE_CLASSES.central}
            headerType={TYPOGRAPHY_TYPE_CLASSES.sectionHeaderLarge}
          >
            <span>Products Goes Here</span>
          </Container>
        </Container>

        <Container containerType={CONTAINER_TYPE_CLASSES.verticalLimitedWidth}>
          <Container heading="Cart" containerType={CONTAINER_TYPE_CLASSES.base}>
            <span>Cart Goes Here</span>
          </Container>
        </Container>
      </Container>
    </div>
  );
}

export default App;
