import AbstractRenderer from "~/lib/renderer/abstract-renderer/AbstractRenderer";
import AbstractTexture2DArray from "~/lib/renderer/abstract-renderer/AbstractTexture2DArray";
import ResourceLoader from "~/app/world/ResourceLoader";
import {RendererTypes} from "~/lib/renderer/RendererTypes";

export default function createProjectedMeshTexture(renderer: AbstractRenderer): AbstractTexture2DArray {
	return renderer.createTexture2DArray({
		width: 512,
		height: 512,
		depth: 28 * 3,
		anisotropy: 16,
		data: [
			ResourceLoader.get('pavementDiffuse'),
			ResourceLoader.get('commonNormal'),
			ResourceLoader.get('commonMask'),

			ResourceLoader.get('asphaltDiffuse'),
			ResourceLoader.get('commonNormal'),
			ResourceLoader.get('commonMask'),

			ResourceLoader.get('cobblestoneDiffuse'),
			ResourceLoader.get('cobblestoneNormal'),
			ResourceLoader.get('commonMask'),

			ResourceLoader.get('footballPitchDiffuse'),
			ResourceLoader.get('commonNormal'),
			ResourceLoader.get('commonMask'),

			ResourceLoader.get('basketballPitchDiffuse'),
			ResourceLoader.get('commonNormal'),
			ResourceLoader.get('commonMask'),

			ResourceLoader.get('tennisPitchDiffuse'),
			ResourceLoader.get('commonNormal'),
			ResourceLoader.get('commonMask'),

			ResourceLoader.get('manicuredGrassDiffuse'),
			ResourceLoader.get('commonNormal'),
			ResourceLoader.get('commonMask'),

			ResourceLoader.get('cyclewayDiffuse'),
			ResourceLoader.get('commonNormal'),
			ResourceLoader.get('commonMask'),

			ResourceLoader.get('railwayDiffuse'),
			ResourceLoader.get('railwayNormal'),
			ResourceLoader.get('commonMask'),

			ResourceLoader.get('rockDiffuse'),
			ResourceLoader.get('rockNormal'),
			ResourceLoader.get('rockMask'),

			ResourceLoader.get('sandDiffuse'),
			ResourceLoader.get('sandNormal'),
			ResourceLoader.get('sandMask'),

			ResourceLoader.get('hedgeDiffuse'),
			ResourceLoader.get('hedgeNormal'),
			ResourceLoader.get('hedgeMask'),

			ResourceLoader.get('woodFenceDiffuse'),
			ResourceLoader.get('woodFenceNormal'),
			ResourceLoader.get('woodFenceMask'),

			ResourceLoader.get('concreteFenceDiffuse'),
			ResourceLoader.get('concreteFenceNormal'),
			ResourceLoader.get('concreteFenceMask'),

			ResourceLoader.get('asphaltRoadDiffuse'),
			ResourceLoader.get('commonNormal'),
			ResourceLoader.get('commonMask'),

			ResourceLoader.get('asphaltIntersectionDiffuse'),
			ResourceLoader.get('commonNormal'),
			ResourceLoader.get('commonMask'),

			ResourceLoader.get('concreteRoadDiffuse'),
			ResourceLoader.get('commonNormal'),
			ResourceLoader.get('commonMask'),

			ResourceLoader.get('concreteIntersectionDiffuse'),
			ResourceLoader.get('commonNormal'),
			ResourceLoader.get('commonMask'),

			ResourceLoader.get('woodRoadDiffuse'),
			ResourceLoader.get('woodRoadNormal'),
			ResourceLoader.get('woodRoadMask'),

			ResourceLoader.get('helipadDiffuse'),
			ResourceLoader.get('helipadNormal'),
			ResourceLoader.get('helipadMask'),

			ResourceLoader.get('gardenDiffuse'),
			ResourceLoader.get('gardenNormal'),
			ResourceLoader.get('gardenMask'),

			ResourceLoader.get('soilDiffuse'),
			ResourceLoader.get('soilNormal'),
			ResourceLoader.get('soilMask'),

			ResourceLoader.get('grassDiffuse'),
			ResourceLoader.get('grassNormal'),
			ResourceLoader.get('grassMask'),

			ResourceLoader.get('forestFloorDiffuse'),
			ResourceLoader.get('forestFloorNormal'),
			ResourceLoader.get('forestFloorMask'),

			ResourceLoader.get('chainLinkFenceDiffuse'),
			ResourceLoader.get('chainLinkFenceNormal'),
			ResourceLoader.get('chainLinkFenceMask'),

			ResourceLoader.get('metalFenceDiffuse'),
			ResourceLoader.get('metalFenceNormal'),
			ResourceLoader.get('metalFenceMask'),

			ResourceLoader.get('stoneWallDiffuse'),
			ResourceLoader.get('stoneWallNormal'),
			ResourceLoader.get('stoneWallMask'),

			ResourceLoader.get('concreteWallDiffuse'),
			ResourceLoader.get('concreteWallNormal'),
			ResourceLoader.get('concreteWallMask'),
		],
		minFilter: RendererTypes.MinFilter.LinearMipmapLinear,
		magFilter: RendererTypes.MagFilter.Linear,
		wrap: RendererTypes.TextureWrap.Repeat,
		format: RendererTypes.TextureFormat.RGBA8Unorm,
		mipmaps: true,
		flipY: true
	});
}