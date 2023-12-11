
import { getDefaultConfig } from 'expo/metro-config';

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push('cjsx');

export default defaultConfig;

