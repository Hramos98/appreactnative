import { createStackNavigator } from "react-navigation-stack";
import DetailScreen from "../screens/Detail/DetailScreen";


const AccountScreenStacks = createStackNavigator({
  Detail: {
    screen: DetailScreen,
    navigationOptions: () => ({
      title: "INFORMACIÓN COVID19"
    })
  }
});

export default AccountScreenStacks;
