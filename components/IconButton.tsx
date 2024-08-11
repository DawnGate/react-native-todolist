import { TouchableOpacity, View } from "react-native";

import { ReactNode } from "react";

type Props = {
  handlePress?: () => void;
  icon: ReactNode;
};
export const IconButton = ({ handlePress, icon }: Props) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View>{icon}</View>
    </TouchableOpacity>
  );
};
