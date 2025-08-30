import { NavigationButtonProps } from "@/types/AartiTypes";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";




export default function NavigationButton({ onPress, icon, disabled, direction }: NavigationButtonProps) {
    return (
        <TouchableOpacity
            style={{ opacity: disabled ? 0.3 : 1 }}
            onPress={disabled ? undefined : onPress}
        >
            <Ionicons
                name={icon}
                size={25}
                color={disabled ? 'white' : 'orange'}
            />
        </TouchableOpacity>
    );
};
